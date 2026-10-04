export default async function handler(req, res) {
  const { cpf } = req.query;
  const apiKey = process.env.CPF_API_KEY;

  if (!cpf) {
    return res.status(400).json({ success: false, message: 'CPF é obrigatório.' });
  }

  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Chave de API não configurada na Vercel.' });
  }

  const cleanCpf = cpf.replace(/\D/g, '');

  if (cleanCpf.length !== 11) {
    return res.status(400).json({ success: false, message: 'CPF deve conter 11 dígitos.' });
  }

  try {
    const response = await fetch(`https://api.cpfhub.io/v1/cpf/${cleanCpf}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data.message || 'Erro na consulta ao CPFHub.'
      });
    }

    return res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Falha de conexão com a API de CPF.'
    });
  }
}