import React, { useState } from 'react';
import { ProjectFormData } from '../types';

export function useAddProjectForm(): [
  ProjectFormData,
  React.Dispatch<ProjectFormData>,
  boolean,
  React.Dispatch<boolean>,
] {
  const initialForm: ProjectFormData = {
    name: '',
    description: '',
  };
  const [projectData, setProjectData] = useState(initialForm);
  const [deleteModalVisible, setModalDeleteVisible] = useState(false);
  return [
    projectData,
    setProjectData,
    deleteModalVisible,
    setModalDeleteVisible,
  ];
}
