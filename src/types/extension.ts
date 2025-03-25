export interface ExtensionType  {
        "logo": string,
        "name": string,
        "description": string,
        "isActive": boolean
}

export type filterType = "All" | "Active" | "Inactive"

export type Extensions = ExtensionType[]