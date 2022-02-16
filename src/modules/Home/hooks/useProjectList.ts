import React, { useState } from 'react';
import { Project } from '@/types/projects';

export function useProjectList(
  projects?: Project[],
): [Project[], React.Dispatch<Project[]>] {
  const [projectsList, setProjectsList] = useState(projects ?? []);
  return [projectsList, setProjectsList];
}
