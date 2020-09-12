<html>
    <body>
        <script src="dist/bundle.js"></script>
        <div class="js-counter">0</div>
        <?php for($i = 0; $i != 200; $i++): ?>
            <span class="add-ico" data-id1="<?= $i ?>">O</span>
            <span class="del-ico hide" data-id2="<?= $i ?>">X</span>
        <?php endfor ?>
        <div class="js-counter">0</div>
    </body>
</html>

<style>
    .hide {
        display: none;
    }
    .add-ico, .del-ico {
        font-size: 40px;
    }
</style>
