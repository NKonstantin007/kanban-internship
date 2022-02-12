import { useState } from 'react';
import { ProjectData } from '@/types/projects';

export function useProjectList(projects?: ProjectData[]) {
  const [projectsList, setProjectsList] = useState(projects ?? []);
  return [projectsList, setProjectsList];
}
