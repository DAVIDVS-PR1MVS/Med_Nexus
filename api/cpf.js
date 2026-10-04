export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { cpf } = req.query;
  const apiKey = process.env.CPF_API_KEY;

  if (!cpf) return res.status(400).json({ success: false, message: 'CPF é obrigatório.' });
  if (!apiKey) {
    console.error('ERRO: CPF_API_KEY não configurada na Vercel.');
    return res.status(500).json({ success: false, message: 'Chave de API ausente na Vercel.' });
  }

  const cleanCpf = String(cpf).replace(/\D/g, '');
  if (cleanCpf.length !== 11) return res.status(400).json({ success: false, message: 'CPF deve conter 11 dígitos.' });

  try {
    const response = await fetch(`https://api.cpfhub.io/cpf/${cleanCpf}`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey.trim().replace(/^["']|["']$/g, ''),
        'Accept': 'application/json'
      }
    });

    const responseText = await response.text();
    let data;
    
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error(`Erro no CPFHub (Status ${response.status}):`, responseText);
      return res.status(response.status).json({ success: false, message: `CPFHub retornou HTTP ${response.status}.` });
    }

    if (!response.ok) {
      console.error(`Erro CPFHub HTTP ${response.status}:`, data);
      return res.status(response.status).json({ success: false, message: data.message || `Erro ${response.status} na consulta.` });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro interno:', error);
    return res.status(500).json({ success: false, message: `Erro interno: ${error.message}` });
  }
}