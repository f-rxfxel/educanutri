'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Amatic_SC } from '@next/font/google'
import Frutinha from '@/components/assets/Frutinha'
import Queijo from '@/components/assets/Queijo'
import Peixe from '@/components/assets/Peixe'

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic',
})



type Topic = 'immune' | 'weight' | 'heart' | 'energy' | 'mental' | null;
type EnergySubtopic = 'overview' | 'carbs' | 'proteins' | 'fats' | 'vitamins' | null;

export default function Component() {
  const [isStarted, setIsStarted] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic>(null)
  const [selectedEnergySubtopic, setSelectedEnergySubtopic] = useState<EnergySubtopic>(null)

  const handleStart = () => {
    setIsStarted(true)
  }

  const handleBack = () => {
    if (selectedTopic === 'energy') {
      setSelectedTopic(null)
      setSelectedEnergySubtopic(null)
    } else if (selectedTopic !== null) {
      setSelectedTopic(null)
    } else if (isStarted) {
      setIsStarted(false)
    }
  }

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic)
    if (topic === 'energy') {
      setSelectedEnergySubtopic('overview')
    }
  }

  const handleEnergySubtopicSelect = (subtopic: EnergySubtopic) => {
    setSelectedEnergySubtopic(subtopic)
  }

  const topicContent = {
    immune: "O sistema imunológico é a defesa natural do corpo contra infecções. Uma dieta rica em vitaminas C e E, bem como zinco e outros nutrientes, pode ajudar a fortalecer suas defesas naturais.",
    weight: "Manter um peso saudável é crucial para a saúde geral. Uma dieta equilibrada, combinada com exercícios regulares, pode ajudar a alcançar e manter um peso ideal.",
    heart: "A saúde cardiovascular é essencial para uma vida longa e ativa. Consumir alimentos ricos em ômega-3, fibras e antioxidantes pode contribuir para um coração mais saudável.",
    mental: "A nutrição desempenha um papel crucial na saúde mental. Alimentos ricos em ácidos graxos ômega-3, vitaminas do complexo B e aminoácidos podem promover um melhor equilíbrio emocional e função cognitiva."
  }

  const energyContent = {
    overview: "Os níveis de energia estão diretamente ligados à nossa dieta. Consumir carboidratos complexos, proteínas magras e gorduras saudáveis pode ajudar a manter a energia ao longo do dia.",
    carbs: "Os carboidratos são a principal fonte de energia do corpo. Opte por carboidratos complexos como grãos integrais, que liberam energia de forma mais lenta e constante.",
    proteins: "As proteínas são essenciais para a construção e reparação de tecidos, além de ajudar na produção de enzimas e hormônios que influenciam nossos níveis de energia.",
    fats: "As gorduras saudáveis, como as encontradas em abacates e nozes, são importantes para a absorção de vitaminas e para fornecer energia de longa duração.",
    vitamins: "Vitaminas do complexo B são cruciais para o metabolismo energético. Alimentos como carnes magras, ovos e vegetais de folhas verdes são ótimas fontes dessas vitaminas."
  }

  return (
      <div className="w-full max-w-md">
        <div className="flex space-x-4 mb-6">
          <Frutinha />
          <Peixe />
          <Queijo />
        </div>
        
        <h1 className={`${amatic.className} text-[3.5rem] tracking-widest mb-6 text-[#ABA4A4] font-black`}>
          <span className='text-[3.9rem] text-[#ABA4A4]'>E</span>
          DUCANUTRI</h1>

        {!isStarted ? (
          <>
            <h2 className="text-xl font-medium mb-2 text-[#ABA4A4]">Por que se alimentar bem?</h2>
            
            <p className="text-sm mb-6">
              Com a alimentação saudável, o corpo recebe os nutrientes, vitaminas e
              minerais necessários para funcionar adequadamente e prevenir doenças.
            </p>
            
            <div className="mb-6 flex gap-2">
              <p className="text-sm text-[#8CE5FD]">Ana Carolina Brasil Bernardes</p>
              <p className="text-sm">•</p>
              <p className="text-sm text-[#F9D1DA]">Nutricionista</p>
            </div>
            
            <Image
              src="/src/components/assets/UNIVAS.png"
              alt="UNIVAS Logo"
              width={150}
              height={50}
            />
            <div className="w-full flex justify-center">
              <Button 
                onClick={handleStart}
                className="rounded-full m-auto px-6 py-5 bg-[#FBFBF9] border-[2px] border-[#ABA4A4] text-[#ABA4A4] font-semibold text-md"
              >
                Iniciar
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-4 text-[#ABA4A4]">Bem-vindo ao EDUCANUTRI!</h2>
            {selectedTopic === null ? (
              <>
                <p className="text-sm mb-4">
                  A nutrição adequada é fundamental para uma vida saudável. Clique nos tópicos abaixo para saber mais:
                </p>
                <div className="space-y-2">
                  <Button onClick={() => handleTopicSelect('immune')} variant="outline" className="w-full justify-start">
                    Fortalece o sistema imunológico
                  </Button>
                  <Button onClick={() => handleTopicSelect('weight')} variant="outline" className="w-full justify-start">
                    Ajuda a manter um peso saudável
                  </Button>
                  <Button onClick={() => handleTopicSelect('heart')} variant="outline" className="w-full justify-start">
                    Melhora a saúde cardiovascular
                  </Button>
                  <Button onClick={() => handleTopicSelect('energy')} variant="outline" className="w-full justify-start">
                    Aumenta os níveis de energia
                  </Button>
                  <Button onClick={() => handleTopicSelect('mental')} variant="outline" className="w-full justify-start">
                    Promove uma melhor saúde mental
                  </Button>
                </div>
              </>
            ) : selectedTopic === 'energy' ? (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Níveis de Energia</h3>
                {selectedEnergySubtopic === 'overview' ? (
                  <>
                    <p className="text-sm mb-4">{energyContent.overview}</p>
                    <div className="space-y-2 mb-4">
                      <Button onClick={() => handleEnergySubtopicSelect('carbs')} variant="outline" className="w-full justify-start">
                        Carboidratos e Energia
                      </Button>
                      <Button onClick={() => handleEnergySubtopicSelect('proteins')} variant="outline" className="w-full justify-start">
                        Proteínas e Energia
                      </Button>
                      <Button onClick={() => handleEnergySubtopicSelect('fats')} variant="outline" className="w-full justify-start">
                        Gorduras e Energia
                      </Button>
                      <Button onClick={() => handleEnergySubtopicSelect('vitamins')} variant="outline" className="w-full justify-start">
                        Vitaminas e Energia
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-md font-medium mb-2">
                      {selectedEnergySubtopic === 'carbs' && "Carboidratos e Energia"}
                      {selectedEnergySubtopic === 'proteins' && "Proteínas e Energia"}
                      {selectedEnergySubtopic === 'fats' && "Gorduras e Energia"}
                      {selectedEnergySubtopic === 'vitamins' && "Vitaminas e Energia"}
                    </h4>
                    <p className="text-sm mb-4">{selectedEnergySubtopic && energyContent[selectedEnergySubtopic]}</p>
                    <Button onClick={() => setSelectedEnergySubtopic('overview')} variant="secondary" className="w-full">
                      Voltar aos subtópicos de energia
                    </Button>
                  </>
                )}
              </div>
            ) : (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">
                  {selectedTopic === 'immune' && "Sistema Imunológico"}
                  {selectedTopic === 'weight' && "Peso Saudável"}
                  {selectedTopic === 'heart' && "Saúde Cardiovascular"}
                  {selectedTopic === 'mental' && "Saúde Mental"}
                </h3>
                <p className="text-sm mb-4">{topicContent[selectedTopic]}</p>
              </div>
            )}
            <Button 
              onClick={handleBack}
              className="w-full mt-4"
              variant="secondary"
            >
              <ArrowLeft size={64} className="mr-2" />
              Voltar
            </Button>
          </div>
        )}
      </div>
  )
}