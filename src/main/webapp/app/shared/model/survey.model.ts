export interface ISurvey {
  id?: number;
  surveyName?: string;
  surveyDescription?: string;
  formURL?: string;
  challengersLocation?: string;
  open?: boolean;
}

export const defaultValue: Readonly<ISurvey> = {
  open: false
};
