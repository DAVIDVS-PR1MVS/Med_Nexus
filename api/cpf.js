export default async function handler(req, res) {
  const { cpf } = req.query;
  const apiKey = process.env.CPF_API_KEY;

  if (!cpf) {
    return res.status(400).json({ success: false, message: 'CPF é obrigatório.' });
  }

  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'CPF_API_KEY não encontrada nas variáveis de ambiente da Vercel.' });
  }

  const cleanCpf = cpf.replace(/\D/g, '');

  if (cleanCpf.length !== 11) {
    return res.status(400).json({ success: false, message: 'CPF deve conter 11 dígitos.' });
  }

  try {
    // Endpoint e cabeçalhos oficiais da CPFHub
    const response = await fetch(`https://api.cpfhub.io/cpf/${cleanCpf}`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey.trim(),
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data.message || 'Erro de resposta da CPFHub.'
      });
    }

    return res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Erro ao conectar à API da CPFHub.'
    });
  }
}