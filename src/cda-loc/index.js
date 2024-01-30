import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './style.css';
import metadata from './block.json';
registerBlockType( metadata.name, {
	edit: () => {
		return (
			<div { ...useBlockProps() }>
				<h2>In This Article</h2>
				<ul >
					<li>
						<a>Example Content (only Cda Header block will appear in this list)</a>
					</li>
				</ul>
			</div>
		);
	},
	save: () => null,
} );
