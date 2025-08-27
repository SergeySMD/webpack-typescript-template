import { PageLayout } from "shared/layouts"
import { Card, Typography, Row, Col, Divider, Tag, Space, Alert } from "antd"
import { 
  CodeOutlined, 
  FolderOutlined, 
  RocketOutlined, 
  SafetyOutlined,
  ApiOutlined,
  ToolOutlined,
  BugOutlined,
  CheckCircleOutlined
} from "@ant-design/icons"
import styles from "./HomePage.module.scss"

const { Title, Paragraph, Text } = Typography

export const HomePage = () => {
  const technologies = [
    { name: "React 18", color: "blue", icon: <CodeOutlined /> },
    { name: "TypeScript", color: "cyan", icon: <CodeOutlined /> },
    { name: "Vite", color: "purple", icon: <RocketOutlined /> },
    { name: "Ant Design", color: "geekblue", icon: <SafetyOutlined /> },
    { name: "Redux Toolkit", color: "red", icon: <ApiOutlined /> },
    { name: "React Router", color: "orange", icon: <CodeOutlined /> },
    { name: "SCSS", color: "pink", icon: <ToolOutlined /> },
    { name: "ESLint", color: "green", icon: <BugOutlined /> },
    { name: "Prettier", color: "lime", icon: <CheckCircleOutlined /> },
    { name: "Husky", color: "volcano", icon: <SafetyOutlined /> }
  ]

  const fsdLayers = [
    {
      name: "app",
      description: "Инициализация приложения, глобальные стили, провайдеры",
      color: "red",
      icon: <RocketOutlined />
    },
    {
      name: "pages",
      description: "Страницы приложения, композиция виджетов",
      color: "orange",
      icon: <FolderOutlined />
    },
    {
      name: "widgets",
      description: "Композиционные компоненты, объединяющие фичи",
      color: "gold",
      icon: <FolderOutlined />
    },
    {
      name: "features",
      description: "Функциональные модули, бизнес-логика",
      color: "green",
      icon: <CodeOutlined />
    },
    {
      name: "entities",
      description: "Бизнес-сущности, модели данных",
      color: "cyan",
      icon: <CodeOutlined />
    },
    {
      name: "shared",
      description: "Переиспользуемые компоненты, утилиты, константы",
      color: "blue",
      icon: <ToolOutlined />
    }
  ]

  return (
    <PageLayout title="Главная">
      <Space direction="vertical" size="large" className={styles.fullWidth}>
        
        <Card>
          <div className={styles.centerContent}>
            <Title level={1} className={styles.titleWithMargin}>
              React Webpack Typescript template
            </Title>
            <Paragraph className={styles.subtitle}>
              Современное веб-приложение основонное на современных технологиях и архитектурных принципах
            </Paragraph>
            <Alert
              message="Этот проект является шаблоном для разработки React приложений с использованием Feature-Sliced Design архитектуры"
              type="info"
              showIcon
              className={styles.centeredAlert}
            />
          </div>
        </Card>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card title="📋 О проекте" bordered={false}>
              <Paragraph>
                React Webpack Typescript template - это современное веб-приложение, построенное с использованием 
                передовых технологий и архитектурных принципов. Проект демонстрирует лучшие 
                практики разработки React приложений с применением Feature-Sliced Design (FSD) методологии.
              </Paragraph>
              <Paragraph>
                Основные цели проекта:
              </Paragraph>
              <ul>
                <li>Демонстрация архитектуры FSD в реальном проекте</li>
                <li>Создание масштабируемой и поддерживаемой кодовой базы</li>
                <li>Использование современных инструментов разработки</li>
                <li>Обеспечение высокого качества кода</li>
              </ul>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card title="🏗️ Архитектура FSD" bordered={false}>
              <Paragraph>
                Feature-Sliced Design - это методология организации кода, которая помогает 
                создавать масштабируемые и поддерживаемые приложения. Архитектура основана 
                на принципе разделения ответственности между слоями.
              </Paragraph>
              <Paragraph>
                <Text strong>Основные принципы:</Text>
              </Paragraph>
              <ul>
                <li>Слоистая архитектура с четкими границами</li>
                <li>Изоляция бизнес-логики</li>
                <li>Переиспользование компонентов</li>
                <li>Простота навигации по коду</li>
              </ul>
            </Card>
          </Col>
        </Row>

        <Card title="📁 Структура слоев FSD" bordered={false}>
          <Row gutter={[16, 16]}>
            {fsdLayers.map((layer, index) => (
              <Col xs={24} sm={12} lg={8} key={layer.name}>
                <Card 
                  size="small" 
                  className={styles.layerCard}
                >
                  <Space direction="vertical" className={styles.fullWidth}>
                    <Space>
                      <Tag color={layer.color} icon={layer.icon}>
                        {layer.name}
                      </Tag>
                    </Space>
                    <Text type="secondary">{layer.description}</Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        <Card title="🛠️ Используемые технологии" bordered={false}>
          <Paragraph className={styles.marginBottom24}>
            Проект построен на современном стеке технологий, обеспечивающем 
            высокую производительность, типобезопасность и отличный developer experience.
          </Paragraph>
          
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card title="Frontend Framework" size="small">
                <Space wrap>
                  {technologies.slice(0, 4).map(tech => (
                    <Tag key={tech.name} color={tech.color} icon={tech.icon}>
                      {tech.name}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
            
            <Col xs={24} sm={12}>
              <Card title="State Management & Routing" size="small">
                <Space wrap>
                  {technologies.slice(4, 6).map(tech => (
                    <Tag key={tech.name} color={tech.color} icon={tech.icon}>
                      {tech.name}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
            
            <Col xs={24} sm={12}>
              <Card title="Styling & Build Tools" size="small">
                <Space wrap>
                  {technologies.slice(6, 8).map(tech => (
                    <Tag key={tech.name} color={tech.color} icon={tech.icon}>
                      {tech.name}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
            
            <Col xs={24} sm={12}>
              <Card title="Code Quality" size="small">
                <Space wrap>
                  {technologies.slice(8).map(tech => (
                    <Tag key={tech.name} color={tech.color} icon={tech.icon}>
                      {tech.name}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card title="✨ Преимущества проекта" bordered={false}>
          <Row gutter={[24, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" className={styles.advantageCard}>
                <RocketOutlined className={`${styles.advantageIcon} ${styles.blue}`} />
                <Title level={4}>Быстрая разработка</Title>
                <Text type="secondary">
                  Vite обеспечивает мгновенную перезагрузку и быструю сборку
                </Text>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" className={styles.advantageCard}>
                <SafetyOutlined className={`${styles.advantageIcon} ${styles.green}`} />
                <Title level={4}>Типобезопасность</Title>
                <Text type="secondary">
                  TypeScript предотвращает ошибки на этапе компиляции
                </Text>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" className={styles.advantageCard}>
                <CodeOutlined className={`${styles.advantageIcon} ${styles.purple}`} />
                <Title level={4}>Чистая архитектура</Title>
                <Text type="secondary">
                  FSD обеспечивает масштабируемость и поддерживаемость
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card title="🚀 Начало работы" bordered={false}>
          <Alert
            message="Готовы начать разработку?"
            description="Этот шаблон предоставляет все необходимые инструменты для создания современного React приложения. Просто начните добавлять свои фичи в соответствующие слои архитектуры FSD."
            type="success"
            showIcon
            action={
              <Space>
                <Text strong>npm start</Text>
                <Text type="secondary">для запуска в режиме разработки</Text>
              </Space>
            }
          />
        </Card>
      </Space>
    </PageLayout>
  )
}