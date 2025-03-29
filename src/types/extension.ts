export interface ExtensionType {
  logo: string
  name: string
  description: string
  isActive: boolean
}

export type filterType = 'all' | 'active' | 'inactive'

export type Extensions = ExtensionType[]
