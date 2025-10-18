import React from 'react'
import { motion } from 'framer-motion'
import './index.css'

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans text-slate-800">
      <header className="cover relative h-screen flex items-center justify-center text-white">
        <div className="overlay"></div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center z-10 px-4">
          <h1 className="text-4xl font-bold">Daouda Diaby</h1>
          <p className="text-xl mt-2">Marketing & Communication dans le Sport</p>
          <p className="italic mt-4">“Faire rayonner le sport à travers des campagnes innovantes et engageantes.”</p>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section>
          <h2>À propos</h2>
          <p>Actuellement en Bachelor 2 Marketing et Communication à PPA Sport Paris, je suis passionné par la communication et l’univers du sport. Mon objectif est de mettre ma créativité et mes compétences au service de projets sportifs ambitieux, alliant performance et stratégie de marque.</p>
        </section>

        <section>
          <h2>Compétences clés</h2>
          <ul>
            <li>Marketing sportif et communication digitale</li>
            <li>Création de contenu (Canva, CapCut, iMovie)</li>
            <li>Gestion de projet et travail d’équipe</li>
            <li>Leadership, rigueur, autonomie</li>
            <li>Langues : Français (natif), Anglais (courant)</li>
          </ul>
        </section>

        <section>
          <h2>Expériences professionnelles</h2>
          <ul>
            <li><strong>Agent polyvalent – Monoprix, Paris</strong> – Relation client, organisation, polyvalence et réactivité.</li>
            <li><strong>Recruteur de donateurs – UNICEF, Paris</strong> – Communication, persuasion, gestion du stress, travail en équipe.</li>
            <li><strong>Préparateur de commande – Amazon, Rouen</strong> – Rigueur, efficacité, respect des normes de sécurité.</li>
          </ul>
        </section>

        <section>
          <h2>Parcours sportif</h2>
          <p><strong>Équipe nationale de Guinée</strong> – Afrobasket 2021, Préqualifications Coupe du Monde & JO</p>
          <p><strong>Club de Lorient (NM1)</strong> – Saison 2022-2023</p>
          <p><strong>Centre de formation Orléans Loiret Basket</strong></p>
          <p><strong>Palmarès</strong> – Classé 73e mondial par Nike, meilleure performance : 17 pts vs Nigéria.</p>
        </section>

        <section>
          <h2>Projets fictifs</h2>
          <h3>Inside Team Guinée</h3>
          <p>Campagne digitale visant à promouvoir l’équipe nationale à travers un storytelling immersif.</p>
          <h3>Fan Experience Lorient Basket</h3>
          <p>Stratégie marketing centrée sur l’engagement des supporters via les réseaux sociaux.</p>
        </section>

        <footer className="mt-8 border-t pt-4">
          <p>📧 daoudadiaby76@hotmail.com | ☎️ 06 52 09 26 76</p>
          <p>🔗 <a href="https://www.linkedin.com/in/daouda-diaby-1a0ba3212" target="_blank" rel="noreferrer">LinkedIn</a> | 📍 Paris</p>
        </footer>
      </main>
    </div>
  )
}
