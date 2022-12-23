import {
  Calendar,
  DatePicker,
  Form,
  Input,
  Pagination,
  Radio,
  Select,
  Table,
  TimePicker,
  Transfer,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import useMutation from '../../../hooks/useMutation'

const { Option } = Select
const { RangePicker } = DatePicker

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
]

export default function Test() {
  const [locale, setLocal] = useState('en')
  const { t, i18n } = useTranslation()
  const [form] = Form.useForm()

  useMutation({ form })

  const changeLocale = (e: any) => {
    const localeValue = e.target.value
    setLocal(localeValue)
    i18n.changeLanguage(localeValue)
  }

  return (
    <div>
      <Radio.Group value={locale} onChange={changeLocale}>
        <Radio.Button key="en" value="en">
          English
        </Radio.Button>
        <Radio.Button key="ja" value="ja">
          Japanese
        </Radio.Button>
      </Radio.Group>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: `${t('homepage.title')}` }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <div>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
      <div>
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker style={{ width: 200 }} />
      </div>

      <div>
        <Transfer dataSource={[]} showSearch targetKeys={[]} />
      </div>
      <div className="site-config-provider-calendar-wrapper">
        <Calendar fullscreen={false} />
      </div>
      <div>
        <Table dataSource={[]} columns={columns} />
      </div>
    </div>
  )
}
