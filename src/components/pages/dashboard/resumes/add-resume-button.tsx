import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar um novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  )
}