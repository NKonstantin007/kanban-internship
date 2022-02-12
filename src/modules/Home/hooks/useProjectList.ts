import React, { useState } from 'react';
import { ProjectData } from '@/types/projects';

export function useProjectList(
  projects?: ProjectData[],
): [ProjectData[] | [], React.Dispatch<ProjectData[] | []>] {
  const [projectsList, setProjectsList] = useState(projects ?? []);
  return [projectsList, setProjectsList];
}
