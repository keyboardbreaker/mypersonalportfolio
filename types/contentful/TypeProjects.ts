import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeProjectsFields {
    projectName?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    skills?: EntryFields.Symbol;
    company?: EntryFields.Symbol;
}
export type TypeProjectsEntry = Entry<TypeProjects, undefined, string>

export type TypeProjects = EntrySkeletonType<TypeProjectsFields>;
