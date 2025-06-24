import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeExperiencesFields {
    name?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
}
export type TypeExperiencesEntry = Entry<TypeExperiences, undefined, string>

export type TypeExperiences = EntrySkeletonType<TypeExperiencesFields>;