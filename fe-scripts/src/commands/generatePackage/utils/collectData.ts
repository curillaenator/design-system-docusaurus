import askQuestion from '../../base/askQuestion';
import { PackageData, Field, FieldsConfig } from '../interfaces';

const generateQuestionText = (question: Field): string => {
  const parts: string[] = [question.name];
  if (question.required) {
    parts.push('*');
  }
  if (question.defaultValue) {
    parts.push(`(${question.defaultValue})`);
  }
  parts.push(': ');

  return parts.join('');
};

const getData = async (question: Field): Promise<string> => {
  const { defaultValue = '', required } = question;
  const questionText = generateQuestionText(question);

  let answer: string;
  do {
    answer = await askQuestion(questionText);
  } while (required && !answer);

  return answer || defaultValue;
};

const collectData = async (questionsConfig: FieldsConfig): Promise<PackageData> => {
  const fields = Object.keys(questionsConfig) as Array<keyof PackageData>;
  const data: Partial<PackageData> = {};
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    data[field] = await getData(questionsConfig[field]);
  }

  return data as PackageData;
};

export default collectData;
