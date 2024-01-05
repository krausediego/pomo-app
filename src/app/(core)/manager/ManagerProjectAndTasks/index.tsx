import React, { useState } from 'react';

import { useAuth } from '@/contexts';
import { useGetProjectsQuery, useGetTagsQuery } from '@/hooks/manager';
import { Stack } from 'expo-router';
import { ScrollView, VStack, Skeleton } from 'native-base';

import {
  ButtonAdd,
  ChangeTypeManagerButtons,
  ListProjectOrTags,
} from './components';

const ManagerProjectAndTasksScreen: React.FC = () => {
  const [typeManager, setTypeManager] = useState<'project' | 'tag'>('project');
  const { user_id } = useAuth();

  const { data: tagsData, isLoading: isTagsLoading } = useGetTagsQuery({
    user_id,
  });

  const { data: projectsData, isLoading: isProjectsLoading } =
    useGetProjectsQuery({
      user_id,
    });

  const changeType = (type: 'project' | 'tag'): void => {
    setTypeManager(type);
  };

  if (isTagsLoading || isProjectsLoading) {
    return (
      <VStack flex={1} bg="white" alignItems="start" pt={8}>
        <Stack.Screen options={{ title: 'Gerenciar Projetos & Tags' }} />

        <ChangeTypeManagerButtons
          typeManager={typeManager}
          changeType={changeType}
        />

        <Skeleton h="65px" rounded="full" my={2} />

        <Skeleton h="16" />
      </VStack>
    );
  }

  return (
    <VStack flex={1} bg="white" alignItems="start" pt={8}>
      <Stack.Screen options={{ title: 'Gerenciar Projetos & Tags' }} />

      <ChangeTypeManagerButtons
        typeManager={typeManager}
        changeType={changeType}
      />

      <ButtonAdd type={typeManager} />

      <ScrollView w="full">
        {typeManager === 'tag'
          ? tagsData?.map(({ id, tag_name, tag_color }) => {
              return (
                <ListProjectOrTags
                  key={id}
                  id={id}
                  type={typeManager}
                  name={tag_name}
                  color={tag_color}
                />
              );
            })
          : projectsData?.map(({ id, project_name, project_color }) => {
              return (
                <ListProjectOrTags
                  key={id}
                  id={id}
                  type={typeManager}
                  name={project_name}
                  color={project_color}
                />
              );
            })}
      </ScrollView>
    </VStack>
  );
};

export default ManagerProjectAndTasksScreen;
