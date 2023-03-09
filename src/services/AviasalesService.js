export default class AviasalesService {
  baseUrl = 'https://aviasales-test-api.kata.academy'

  async getResource(url) {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(response.status)
    }

    const result = await response.json()
    return result
  }

  async getSearchId() {
    const result = await this.getResource(`${this.baseUrl}/search`)
    return result.searchId
  }

  getTickets = async (searchId) => {
    const ticketsResult = []
    try {
      const { tickets, stop } = await this.getResource(`${this.baseUrl}/tickets?searchId=${searchId}`)
      ticketsResult.push(...tickets)
      if (!stop) {
        ticketsResult.push(...(await this.getTickets(searchId)))
      }
    } catch (e) {
      if (e.message === '500') {
        ticketsResult.push(...(await this.getTickets(searchId)))
      } else {
        throw e
      }
    }
    return ticketsResult
  }
}
