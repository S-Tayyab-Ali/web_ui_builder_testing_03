"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    {
      name: "Jett",
      role: "Duelist",
      description: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can.",
      abilities: ["Cloudburst", "Updraft", "Tailwind", "Blade Storm"],
      color: "from-cyan-500 to-blue-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1f0e1e2d1ece7426/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Jett.png"
    },
    {
      name: "Phoenix",
      role: "Duelist",
      description: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare.",
      abilities: ["Blaze", "Curveball", "Hot Hands", "Run it Back"],
      color: "from-orange-500 to-red-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a6afe94995c93b6/5eb7cdc6ee88132a6f6cfc31/V_AGENTS_587x900_Phoenix.png"
    },
    {
      name: "Sage",
      role: "Sentinel",
      description: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends.",
      abilities: ["Barrier Orb", "Slow Orb", "Healing Orb", "Resurrection"],
      color: "from-emerald-400 to-teal-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt36e7f7eef1cdb1e4/5eb7cdc6df178c41f04a0ed8/V_AGENTS_587x900_Sage.png"
    },
    {
      name: "Sova",
      role: "Initiator",
      description: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency.",
      abilities: ["Owl Drone", "Shock Bolt", "Recon Bolt", "Hunter's Fury"],
      color: "from-blue-400 to-indigo-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1f0e1e2d1ece7426/5eb7cdc6ee88132a6f6cfc29/V_AGENTS_587x900_Sova.png"
    },
    {
      name: "Viper",
      role: "Controller",
      description: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield.",
      abilities: ["Snake Bite", "Poison Cloud", "Toxic Screen", "Viper's Pit"],
      color: "from-green-500 to-lime-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt45c7c3c7e7e113cf/5eb7cdc6bf6a5a415e0680c1/V_AGENTS_587x900_Viper.png"
    },
    {
      name: "Reyna",
      role: "Duelist",
      description: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores.",
      abilities: ["Leer", "Devour", "Dismiss", "Empress"],
      color: "from-purple-500 to-pink-600",
      image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4c41c8fdd525f413/5ed7d2e77c1b4a0e7d714929/V_AGENTS_587x900_Reyna.png"
    }
  ];

  const maps = [
    {
      name: "Haven",
      location: "Thimphu, Bhutan",
      sites: "3 Sites (A, B, C)",
      description: "A monastery with three sites to attack and defend."
    },
    {
      name: "Bind",
      location: "Rabat, Morocco",
      sites: "2 Sites (A, B)",
      description: "Two sites with one-way teleporters for quick rotations."
    },
    {
      name: "Ascent",
      location: "Venice, Italy",
      sites: "2 Sites (A, B)",
      description: "An open playground with mechanical doors."
    },
    {
      name: "Split",
      location: "Tokyo, Japan",
      sites: "2 Sites (A, B)",
      description: "Verticality and ropes define this urban map."
    },
    {
      name: "Icebox",
      location: "Bennett Island, Russia",
      sites: "2 Sites (A, B)",
      description: "A frozen facility with ziplines and vertical combat."
    },
    {
      name: "Breeze",
      location: "Caribbean Sea",
      sites: "2 Sites (A, B)",
      description: "Wide open spaces and long sightlines."
    }
  ];

  const weapons = [
    {
      category: "Sidearms",
      items: ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"]
    },
    {
      category: "SMGs",
      items: ["Stinger", "Spectre"]
    },
    {
      category: "Rifles",
      items: ["Bulldog", "Guardian", "Phantom", "Vandal"]
    },
    {
      category: "Sniper",
      items: ["Marshal", "Operator"]
    },
    {
      category: "Heavy",
      items: ["Bucky", "Judge", "Ares", "Odin"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 transform rotate-45"></div>
            <h1 className="text-2xl font-bold text-white tracking-wider">VALORANT</h1>
          </div>
          <div className="flex gap-6">
            <a href="#agents" className="text-gray-300 hover:text-red-500 transition-colors">Agents</a>
            <a href="#maps" className="text-gray-300 hover:text-red-500 transition-colors">Maps</a>
            <a href="#weapons" className="text-gray-300 hover:text-red-500 transition-colors">Arsenal</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-red-600 transform rotate-45 mx-auto mb-8 animate-pulse"></div>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 mb-6 tracking-tight">
            VALORANT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8">
              Explore Agents
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold text-lg px-8">
              View Maps
            </Button>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">AGENTS</h2>
            <p className="text-gray-400 text-lg">Choose your fighter. Master their abilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card 
                key={agent.name} 
                className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-red-600 transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedAgent(selectedAgent === agent.name ? null : agent.name)}
              >
                <CardHeader>
                  <div className={`w-full h-64 bg-gradient-to-br ${agent.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden relative`}>
                    <Image 
                      src={agent.image} 
                      alt={agent.name} 
                      width={587}
                      height={900}
                      className="h-full w-auto object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-white">{agent.name}</CardTitle>
                    <Badge variant="outline" className="bg-red-600/20 border-red-600 text-red-400">
                      {agent.role}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {agent.description}
                  </CardDescription>
                </CardHeader>
                {selectedAgent === agent.name && (
                  <CardContent>
                    <h4 className="text-sm font-semibold text-red-500 mb-2">ABILITIES</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {agent.abilities.map((ability) => (
                        <Badge key={ability} variant="secondary" className="bg-slate-800 text-gray-300 justify-center">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">MAPS</h2>
            <p className="text-gray-400 text-lg">Battle across diverse locations around the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maps.map((map) => (
              <Card key={map.name} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-red-600 transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl font-black text-white/30">{map.name}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{map.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {map.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-orange-600 text-orange-400 bg-orange-600/10">
                      {map.sites}
                    </Badge>
                    <p className="text-sm text-gray-400">{map.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weapons Section */}
      <section id="weapons" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">ARSENAL</h2>
            <p className="text-gray-400 text-lg">Equip yourself with the perfect weapon for every situation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="Sidearms" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-slate-900 mb-8">
                {weapons.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category}
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {weapons.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.items.map((weapon) => (
                          <div 
                            key={weapon} 
                            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-red-600 transition-all cursor-pointer group"
                          >
                            <div className="w-full h-24 bg-gradient-to-br from-slate-700 to-slate-600 rounded mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <span className="text-3xl font-black text-white/20">{weapon[0]}</span>
                            </div>
                            <h4 className="text-center font-semibold text-white">{weapon}</h4>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-red-600 transform rotate-45"></div>
            <h3 className="text-xl font-bold text-white">VALORANT</h3>
          </div>
          <p className="text-gray-500 mb-4">
            Unofficial fanpage dedicated to Riot Games&apos; VALORANT
          </p>
          <p className="text-gray-600 text-sm">
            © 2024 This is a fan-made website. VALORANT and all related content are property of Riot Games.
          </p>
        </div>
      </footer>
    </div>
  );
}




