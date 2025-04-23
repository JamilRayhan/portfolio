import { ProjectRepository, Project } from '../repositories/ProjectRepository'

export interface IProjectService {
  getProjects(): Project[]
}

export class ProjectService implements IProjectService {
  constructor(private repo: ProjectRepository = new ProjectRepository()) {}

  getProjects(): Project[] {
    return this.repo.getAll()
  }
}
