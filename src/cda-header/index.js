import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: ({ attributes, setAttributes }) => {
		let { text, idHeader } = attributes;
		const changeText = (newText) => {
			let newIdHeader = newText.toLowerCase().replace(/\s+/g, '-');
			setAttributes({ text: newText, idHeader: newIdHeader })
		}
		return (
			<>
				<RichText {...useBlockProps()}
					onChange={changeText}
					value={text}
					data-cda="bm"
					id={idHeader}
					tagName="h2"
					placeholder={__('Tambahkan Judul')}
				>
				</RichText>
			</>
		);
	},
	save: () => {
        return null;
    },
});
