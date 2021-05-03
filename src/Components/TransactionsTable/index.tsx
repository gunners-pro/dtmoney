import React from 'react'
import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Website</td>
            <td className="deposit">R$14.000</td>
            <td>Desenvolvimento</td>
            <td>03/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/06/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento Website</td>
            <td>R$14.000</td>
            <td>Desenvolvimento</td>
            <td>03/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
