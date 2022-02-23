import React, { useState } from 'react';

export function useDeleteState(): [
  string,
  React.Dispatch<string>,
  boolean,
  React.Dispatch<boolean>,
] {
  const [projectId, setProjectId] = useState('');
  const [deleteModalVisible, setModalDeleteVisible] = useState(false);
  return [projectId, setProjectId, deleteModalVisible, setModalDeleteVisible];
}
