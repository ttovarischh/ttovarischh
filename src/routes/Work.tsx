import React, { useState } from "react";
import M_PageHeader from "../components/Molecules/M_PageHeader";
import T_ProjectsGrid from "../components/Templates/T_ProjectsGrid";
import { Project } from "../db/types";

interface WorkPageProps {
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
  projects: Array<Project>;
}

const WorkPage: React.FC<WorkPageProps> = ({
  currentLanguage,
  t,
  projects,
}) => {
  const filterTags = [
    { name: t("works.all"), filter: null },
    { name: t("works.productDesign"), filter: "product" },
    { name: t("works.UIUX"), filter: "uiux" },
    { name: t("works.artDirection"), filter: "artdir" },
    { name: t("works.development"), filter: "dev" },
  ];
  const projectsAmount = projects.length.toString();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [fadeOutStates, setFadeOutStates] = useState<boolean[]>(
    new Array(projects.length).fill(false)
  );

  const handleFilterSelect = (filter: string | null) => {
    const newFadeOutStates = projects.map((project: any) =>
      filter
        ? !project.filterTags?.some((tag: any) => tag.value === filter)
        : false
    );

    setFadeOutStates(newFadeOutStates);

    setTimeout(() => {
      setSelectedFilter(filter);
      setFadeOutStates(new Array(projects.length).fill(false));
    }, 300);
  };

  const filteredProjects = selectedFilter
    ? projects.filter((project: any) =>
        project.filterTags?.some((tag: any) => tag.value === selectedFilter)
      )
    : projects;

  return (
    <>
      <M_PageHeader
        works
        bigText={t("works.allCases")}
        currentLanguage={currentLanguage}
        filterTags={filterTags}
        onFilterSelect={handleFilterSelect}
        selectedFilter={selectedFilter}
        columnAHeader={t("works.amount")}
        columnBHeader={t("works.filter")}
        columnAText={`${projectsAmount} ${t("works.cases")}`}
        columnBText={t("works.by")}
      />
      <T_ProjectsGrid
        projects={filteredProjects}
        currentLanguage={currentLanguage}
        fadeOutStates={fadeOutStates}
      />
    </>
  );
};

export default WorkPage;
