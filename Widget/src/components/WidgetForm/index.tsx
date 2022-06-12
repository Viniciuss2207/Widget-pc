import { CloseButton } from "../CloseButton";

import bugImageSource from "../../assets/bug.svg";
import ideaImageSource from "../../assets/idea.svg";
import thoughtImageSource from "../../assets/thougth.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {

  BUG: {
    title: "Problema",
    image: {
      source: bugImageSource,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageSource,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageSource,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export  type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);


function handLeRestartFeedback(){
  setFeedbackSent(false)
  setFeedbackType(null)
}
  
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent  ?(
        <FeedbackSuccessStep onFeedbackRestartRequested = {handLeRestartFeedback} />
      ) : (
        <>
         {!feedbackType ? (
         <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
       ):  (
         <FeedbackContentStep
           feedbackType={feedbackType} 
           onFeedbackRestartRequested={handLeRestartFeedback}
           onFeedbackSent = {() => setFeedbackSent(true) }
           />
       )}
        </>
      ) }

      <footer className="text-xs text-neutral-400" >
        feito com ♥ pelo <a  className="underline underline-offset-2" href="https://github.com/Viniciuss2207" >Vini</a>
        </footer>
    </div>
  );
}