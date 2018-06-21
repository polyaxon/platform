export class JobModel {
  public uuid: string;
  public unique_name: string;
  public id: number;
  public name: string;
  public last_status: string;
  public definition: string;
  public deleted?: boolean;
  public project?: string;
  public status?: string;
  public created_at: string;
  public updated_at: string;
  public started_at: string;
  public finished_at: string;
  public resources: {[key: string]: any};
}

export class JobStateSchema {
  byUniqueNames: {[uniqueName: string]: JobModel};
  uniqueNames: string[];
}

export const JobsEmptyState = {byUniqueNames: {}, uniqueNames: []};
