export async function authRequest(endpoint, { body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Token ${token}`

  const response = await fetch(`/accounts/api/${endpoint}/`, {
    method: 'POST',
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const data = response.status === 204 ? null : await response.json()

  if (!response.ok) {
    const message = data?.detail || Object.values(data || {}).flat().join(' ')
    throw new Error(message || 'The request could not be completed.')
  }

  return data
}