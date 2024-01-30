<?php
?>
<pre <?php echo get_block_wrapper_attributes(); ?>>
	<code class="<?php echo $attributes['language']; ?>">
	<?php esc_html_e($attributes['code']); ?>
	</code>
</pre>
