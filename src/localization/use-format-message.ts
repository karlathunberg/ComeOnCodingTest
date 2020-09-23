import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat'
import { useIntl } from 'react-intl'
import { IMessages } from './messages'

export default (): [
  (
    id: keyof IMessages,
    values?: Record<string, FormatXMLElementFn<string, string>>
  ) => string,
  (
    id: keyof IMessages,
    values?: Record<string, PrimitiveType | React.ReactElement>
  ) => React.ReactNode
] => {
  const intl = useIntl()

  const formatText = (
    id: keyof IMessages,
    values: Record<string, FormatXMLElementFn<string, string>> = {}
  ) => intl.formatMessage({ id }, values)

  const formatComponent = (
    id: keyof IMessages,
    values: Record<string, PrimitiveType | React.ReactElement> = {}
  ) => intl.formatMessage({ id }, values)

  return [formatText, formatComponent]
}
