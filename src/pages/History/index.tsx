import React, { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'

export default function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((c) => {
              return (
                <tr key={c.id}>
                  <td>{c.task}</td>
                  <td>{c.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(c.startDate, { addSuffix: true })}
                  </td>
                  <td>
                    {c.finishedDate && (
                      <Status statusColor="green">Finished</Status>
                    )}

                    {c.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}

                    {!c.interruptedDate && !c.finishedDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
