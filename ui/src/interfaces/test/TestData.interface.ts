import Section from './Section.interface';

export default interface TestData {
  totalTime: number;
  mediaURL: string;
  title: string;
  content: string;
  description: string;
  type: string;
  sections: Section[];
}
