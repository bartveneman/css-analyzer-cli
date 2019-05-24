const React = require('react')
const {render, Box} = require('ink')
const importJsx = require('import-jsx')
const Complexity = importJsx('./Complexity')
const Selectors = importJsx('./Selectors')
const Performance = importJsx('./Performance')
const Branding = importJsx('./Branding')

const Section = ({children}) => (
	<Box marginBottom={1} marginTop={1} flexDirection={'column'}>
		{children}
	</Box>
)

const WallaceCli = ({stats, cliOptions}) => (
	<React.Fragment>
		<Section>
			<Complexity stats={stats} verbose={cliOptions.verbose} />
		</Section>
		<Section>
			<Selectors stats={stats} verbose={cliOptions.verbose} />
		</Section>
		<Section>
			<Performance stats={stats} verbose={cliOptions.verbose} />
		</Section>
		<Section>
			<Branding stats={stats} verbose={cliOptions.verbose} />
		</Section>
		{/* @TODO: optionally add link to url that was entered as argument to the CLI */}
	</React.Fragment>
)

module.exports = props => render(<WallaceCli {...props} />)
