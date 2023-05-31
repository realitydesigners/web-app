import { previewData } from 'next/headers'

export function getPreviewToken(): string | any {
  return (previewData() as { token?: string | null })?.token
}
