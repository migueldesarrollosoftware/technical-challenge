import { httpStatus } from "@libs/utils/enums/http-status.enum";
import axios, { AxiosResponse } from "axios";
import { env } from "../../../../env";
class ApiSwapi {
  private baseUrl: string;
  private genericError = "An error occurred with API SWAPI";

  constructor(baseUrl?: string) {
    this.baseUrl = env.apiKeySwapi || baseUrl || "https://swapi.py4e.com/api/";
  }

  public async getPeopleById(id: string): Promise<string> {
    const url = `${this.baseUrl}people/${id}/`;
    try {
      const response: AxiosResponse = await axios.get(url);
      if (response.status === httpStatus.OK) {
        return response?.data;
      } else {
        throw new Error("GetPeople Error");
      }
    } catch (error) {
      throw new Error(this.genericError);
    }
  }

  public async getPlanetsById(id: string): Promise<void> {
    const url = `${this.baseUrl}/planets/${id}/`;
    try {
      const response: AxiosResponse = await axios.get(url);
      if (response.status === httpStatus.OK) {
        return response?.data;
      } else {
        throw new Error("GetPlanets Error");
      }
    } catch (error) {
      throw new Error(this.genericError);
    }
  }
}

export default ApiSwapi;
