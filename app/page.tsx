"use client"

import { useState, useMemo, useCallback } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { places as allPlaces } from "@/lib/places-data"
import type { Place } from "@/lib/places-data"
import Header from "@/components/header"
import SidebarFilters from "@/components/sidebar-filters"
import PlaceModal from "@/components/place-modal"

const InteractiveMap = dynamic(() => import("@/components/map/interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Carregando mapa...</p>
      </div>
    </div>
  ),
})

export default function Page() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const [modalPlace, setModalPlace] = useState<Place | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [minRating, setMinRating] = useState(0)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [sortBy, setSortBy] = useState<"recent" | "rating" | "name">("recent")

  const filteredPlaces = useMemo(() => {
    let result = [...allPlaces]

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating)
    }

    if (showFavoritesOnly) {
      result = result.filter((p) => p.favorite)
    }

    switch (sortBy) {
      case "recent":
        result.sort((a, b) => {
          if (!a.visitDate) return 1
          if (!b.visitDate) return -1
          return new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime()
        })
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [selectedCategory, minRating, showFavoritesOnly, sortBy])

  const handleSelectPlace = useCallback((place: Place) => {
    setSelectedPlace(place)
    setModalPlace(place)
    setSidebarOpen(false)
  }, [])

  const handleMapSelect = useCallback((place: Place) => {
    setSelectedPlace(place)
    setModalPlace(place)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalPlace(null)
    setSelectedPlace(null)
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden pt-14">
        {/* Desktop Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden w-[360px] flex-shrink-0 border-r border-border bg-card lg:flex lg:flex-col"
        >
          <SidebarFilters
            places={allPlaces}
            filteredPlaces={filteredPlaces}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            minRating={minRating}
            onMinRatingChange={setMinRating}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onSelectPlace={handleSelectPlace}
          />
        </motion.aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1400] bg-foreground/30 backdrop-blur-sm lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 top-14 z-[1400] w-[320px] border-r border-border bg-card shadow-xl lg:hidden"
              >
                <SidebarFilters
                  places={allPlaces}
                  filteredPlaces={filteredPlaces}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  minRating={minRating}
                  onMinRatingChange={setMinRating}
                  showFavoritesOnly={showFavoritesOnly}
                  onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onSelectPlace={handleSelectPlace}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Map */}
        <main className="relative flex-1">
          <InteractiveMap
            places={filteredPlaces}
            onSelectPlace={handleMapSelect}
            selectedPlace={selectedPlace}
          />

          {/* Mobile bottom quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 left-4 right-4 z-[1000] flex items-center justify-between rounded-xl bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-lg font-bold text-primary">{allPlaces.filter((p) => p.visited).length}</p>
                <p className="text-xs text-muted-foreground">Visitados</p>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">{allPlaces.length - allPlaces.filter((p) => p.visited).length}</p>
                <p className="text-xs text-muted-foreground">Faltam</p>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-accent/10 px-2.5 py-1.5">
              <span className="text-xs font-medium text-accent-foreground">
                {(allPlaces.filter((p) => p.visited).reduce((a, p) => a + p.rating, 0) / allPlaces.filter((p) => p.visited).length).toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">avg</span>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Place Detail Modal */}
      <PlaceModal place={modalPlace} onClose={handleCloseModal} />
    </div>
  )
}
