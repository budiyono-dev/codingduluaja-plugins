import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock, getDefaultBlockName } from '@wordpress/blocks';
import {
	useBlockProps,
	RichText,
	BlockControls,
	HeadingLevelDropdown
} from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: ({ attributes, setAttributes, mergeBlocks, onReplace, clientId }) => {
		let { text, idHeader, level } = attributes;
		const changeText = (newText) => {
			let newIdHeader = newText.toLowerCase().replace(/\s+/g, '-');
			setAttributes({ text: newText, idHeader: newIdHeader })
		}
		return (
			<>
				<BlockControls >
					<HeadingLevelDropdown
						value={level}
						onChange={(newLevel) => setAttributes({ level: newLevel })}
					/>
				</BlockControls>
				<RichText {...useBlockProps()}
					onChange={changeText}
					value={text}
					data-cda="bm"
					id={idHeader}
					tagName="h2"
					placeholder={__('Tambahkan Judul')}
					onSplit={ ( value, isOriginal ) => {
						let block;
	
						if ( isOriginal || value ) {
							block = createBlock( 'create-block/cda-block', {
								...attributes,
								content: value,
							} );
						} else {
							block = createBlock(
								getDefaultBlockName() ?? 'create-block/cda-block'
							);
						}
	
						if ( isOriginal ) {
							block.clientId = clientId;
						}
	
						return block;
					} }
					onMerge={mergeBlocks}
					onReplace={onReplace}
					onRemove={() => onReplace([])}
					
				>
				</RichText>
			</>
		);
	},
	save: ({ attributes }) => {
		const { text, level, idHeader } = attributes;
		const TagName = 'h' + level;

		return (
			<TagName {...useBlockProps.save()} data-cda="bm" id={idHeader}>
				<RichText.Content value={text} />
			</TagName>
		)
	}
});
