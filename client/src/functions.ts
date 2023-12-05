export function shortString(str: string, limit: number):string {
  return str.length > limit ? `${str.substring(0,limit - 2)}...` : str
}

export function formatPrice(str: string): string {
  return str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}