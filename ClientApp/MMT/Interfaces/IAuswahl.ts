import Project from "../classes/project";

export interface IAuswahlProps {
    collection: Array<Project>;
    onAuswahl : (selectedProject : string) => void;
  }