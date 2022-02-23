import { createCRUDApis } from './crud';

export interface ILearningTopic {
  _id?: string;
  title?: string;
  count?: number;
  url?: string;
}

const [
  createLearningTopic,
  getLearningTopics,
  getLearningTopic,
  updateLearningTopic,
  deleteLearningTopic,
] = createCRUDApis<ILearningTopic>('learning-topic');

export const useLearningTopicApi = () => ({
  createLearningTopic,
  getLearningTopics,
  getLearningTopic,
  updateLearningTopic,
  deleteLearningTopic,
});
