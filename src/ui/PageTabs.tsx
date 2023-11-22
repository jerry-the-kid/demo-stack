import { Tabs, Box, Tab } from '@mui/material';

interface PageTabsProps {
  readonly tabsValue: { label: string; value: number }[];
  readonly value: number;
  readonly onSetTabValue: (tabValue: number) => void;
}

function PageTabs({ tabsValue, value, onSetTabValue }: PageTabsProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onSetTabValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '2rem' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
      >
        {tabsValue.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
}

export default PageTabs;
