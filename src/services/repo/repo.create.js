import Repo from "../../entities/repo.entity.js";

export class CreateRepoUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(repoBody) {
    const newRepo = new Repo(repoBody);
    newRepo.validate();
    const repo = await this.repository.create(newRepo.getRepo());
    return repo.filter((item) => (item.name = repoBody.name));
  }
}
