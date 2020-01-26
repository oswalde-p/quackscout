function settingsComponent() {
  return (
    <Page>
      <Section
        title={<Text bold>BG Source</Text>}>
        <Select
          label={'Source'}
          settingsKey="bgSource"
          options={[
            {name:'Nightscout'},
            {name:'Tomato'}
          ]}
        />
        <TextInput
          label="Nightscout URL"
          placeholder="https://<your-nightscout-app>.com"
          settingsKey="nightscoutUrl"
          type="string"
        />
      </Section>
      <Section
        title={<Text bold>Secondary time</Text>}>
        <Toggle
          label="Show"
          value="true"
          settingsKey="showSecondTime"
        />
        <TextInput
          label="Time Offset (h)"
          settingsKey="secondTimeOffset"
          type="number"
        />
      </Section>
      <Toggle
        label="Show battery %"
        value="true"
        settingsKey="showBatteryStatus"
      />
      <Section
        title={<Text bold>Sync warning</Text>}>
        <Toggle
          label="Show"
          value="true"
          settingsKey="showWarning"
        />
        <TextInput
          label="Threshold (minutes, default = 40)"
          settingsKey="warningThreshold"
          type="number"
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(settingsComponent) //eslint-disable-line no-undef
