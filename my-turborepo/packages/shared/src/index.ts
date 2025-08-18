// src/index.ts sample export (will change later)
export interface SharedType {
  id: string;
  name: string;
}

export const sharedUtil = (input: string) => `Processed: ${input}`;