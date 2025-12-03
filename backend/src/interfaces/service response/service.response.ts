
export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  dataList?: T[];
  successMessage?: string;
  errorMessage?: string;
}