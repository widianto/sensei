<?php
/**
 * File containing the Sensei_Block_Quiz_Actions class.
 *
 * @package sensei
 * @since   3.9.0
 */
// phpcs:ignoreFile WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- Wordpress blocks API not snake case.

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Sensei_Block_Quiz_Actions is responsible for handling the 'Quiz' block.
 */
class Sensei_Block_Quiz_Actions {

	/**
	 * Sensei_Block_Quiz_Actions constructor.
	 */
	public function __construct() {
		Sensei_Blocks::register_sensei_block(
			'sensei-lms/quiz-actions',
			[
				'render_callback' => [ $this, 'render_empty' ],
			]
		);

		add_action( 'sensei_single_quiz_questions_after', [ $this, 'render_single_quiz_actions' ] );
	}

	/**
	 * Renders the block as an empty string.
	 *
	 * @param array  $attributes The block attributes.
	 * @param string $content    The block content.
	 *
	 * @return string The block HTML.
	 */
	public function render_empty( array $attributes, string $content ): string {
		return '';
	}

	public function render_single_quiz_actions() {

		global $post;
		$lesson_id = Sensei()->quiz->get_lesson_id( $post->ID );

		$blocks = Sensei_Block_Quiz_Actions::find( $lesson_id );

		echo '<div style="display: flex; align-items: baseline;">' . wp_kses_post( join( "\n", array_map( 'render_block', $blocks ) ) ) . '</div>';

	}

	public static function find( $lesson_id ) {
		$post   = get_post( $lesson_id );
		$blocks = parse_blocks( $post->post_content );

		$block = self::find_block( $blocks, 'sensei-lms/quiz-actions' );

		return $block ? $block['innerBlocks'] : [];
	}

	/**
	 * Find a block by name.
	 *
	 * @param WP_Block_Parser_Block[] $blocks
	 * @param string                  $name
	 *
	 * @return false|mixed
	 */
	private static function find_block( array $blocks, string $name ) {
		foreach ( $blocks as $block ) {
			if ( $name === $block['blockName'] ) {
				return $block;
			}

			$found_block = self::find_block( $block['innerBlocks'], $name );
			if ( $found_block ) {
				return $found_block;
			}
		}

		return false;
	}
}
