<form action="<?php echo home_url( '/' ); ?>" method="get" class="form-stacked">
    <fieldset>
		<div class="form-group">
			<div class="input-append input-prepend">
				<input type="text" class="form-control" name="s" id="search" placeholder="<?php _e("Search","bonestheme"); ?>" value="<?php the_search_query(); ?>" /><button type="submit" class="btn btn-default"><?php _e("Search","bonestheme"); ?></button>
			</div>
        </div>
    </fieldset>
</form>