import { registerBlockType } from '@wordpress/blocks';
import { TextControl, ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit: ({ setAttributes, attributes }) => {
        const postType = useSelect(
            (select) => select('core/editor').getCurrentPostType(),
            []
        );

        const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

        const metaDescription = meta['cda_meta_description'];
        const metaIndex = meta['cda_meta_index'];

        const changeDescription = desc => setMeta({ ...meta, cda_meta_description: desc });
        const changeIndex = isIndexed => setMeta({ ...meta, cda_meta_index: isIndexed });

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Setting Meta Index">
                        <PanelRow>
                            <ToggleControl
                                label="Indexed"
                                checked={metaIndex}
                                onChange={changeIndex}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div {...useBlockProps()}>
                    <TextControl
                        label="Meta Description"
                        value={metaDescription}
                        onChange={changeDescription}
                    />
                </div>
            </>
        );
    },

    save: () => {
        return null;
    },
});
