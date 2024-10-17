'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Pizza, Apple, Fish, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
    <div className="flex flex-col items-center justify-between min-h-screen bg-white p-6 text-gray-700">
      <div className="w-full max-w-md">
        <div className="flex justify-center space-x-4 mb-6">
          <Pizza className="text-[#FFA07A] w-8 h-8" />
          <Apple className="text-[#DDA0DD] w-8 h-8" />
          <Fish className="text-[#98FB98] w-8 h-8" />
        </div>
        
        <h1 className="text-4xl font-light tracking-widest text-center mb-6">EDUCANUTRI</h1>
        
        {!isStarted ? (
          <>
            <h2 className="text-xl font-medium mb-2">Por que se alimentar bem?</h2>
            
            <p className="text-sm mb-6">
              Com a alimentação saudável, o corpo recebe os nutrientes, vitaminas e
              minerais necessários para funcionar adequadamente e prevenir doenças.
            </p>
            
            <p className="text-sm text-[#00CED1] mb-1">Ana Carolina Brasil Bernardes</p>
            <p className="text-xs mb-6">Nutricionista</p>
            
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="UNIVAS Logo"
              width={150}
              height={50}
              className="mb-6"
            />
            
            <Button 
              onClick={handleStart}
              className="w-full"
            >
              Iniciar
            </Button>
          </>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-4">Bem-vindo ao EDUCANUTRI!</h2>
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
                    <Button onClick={() => setSelectedEnergySubtopic('overview')} variant="outline" className="w-full">
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}